# Paso a paso - Simulacro I

## Creacion del proyecto

```bash
ng new gestion-crud
```

## Modelo de datos

En la ruta ./src/app crear la carpeta models donde se crearan los modelos pertinentes.

```ts
export default interface Modelo {
    id: string
}
```

## Json server

Crear el archivo db.json en la raiz del proyecto.

```json
{
    "productos": [
        {
            "id": "e53c",
            "name": "Celular",
            "price": 600,
            "stock": 10
        },
        {
            "id": "6a1a",
            "name": "Notebook",
            "price": 1500,
            "stock": 5
        },
        {
            "id": "107b",
            "name": "Monitor",
            "price": 1000,
            "stock": 15
        }
    ]
}
```

## Estructura de la aplicacion

Crear los componentes necesarios.

```bash
ng g c components/header
```

Crear las paginas necesarias.

```bash
ng g c pages/home
```

En app.ts en imports agregar los componentes necesarios, por ejemplo Header.

En app.html agregar las etiquetas de los componentes que estaran presentes en todas las paginas, ejemplo ```<app-header></app-header> ```

## Routing

Para que cada page tenga su propia ruta. Ir al archivo app.routes.ts en el array Routes agregar 

```ts
{path: '', component: HomePage}, {path: 'product-list/edit/:id', component: FormEditPage}
```
:id es para rutas parametricas y acceder al detalle del elemento con ese id.

## Formularios reactivos y validaciones

En el archivo form.ts - (SIN USAR FormBuilder)

``` ts

  productForm: FormGroup;
  name: FormControl;
  price: FormControl;
  stock: FormControl;

  constructor(public pService: ProductService){
    
    this.name = new FormControl('', Validators.required);
    this.price = new FormControl('', Validators.required);
    this.stock = new FormControl('', [Validators.required, Validators.min(10)]);
    
    this.productForm = new FormGroup({
      name: this.name,
      price: this.price,
      Stock: this.stock
    });

  }
```

En el archivo form.ts - (USANDO FormBuilder)

``` ts
productForm: FormGroup;

constructor(private fb: FormBuilder, public pService: ProductService){
this.productForm = this.fb.group({
    name: ['', Validators.required],
    price: ['', Validators.required],
    stock: ['', [Validators.required, Validators.min(10)]]
})
}

get name() {
return this.productForm.get('name')!;
}

get price() {
return this.productForm.get('price')!;
}

get stock() {
return this.productForm.get('stock')!;
}
```

Cuando son varios Validators, van en un array.

En el archivo form.hmtl

``` html
<form [formGroup]="productForm"> 
    <fieldset>
        <label for="product-name">Nombre</label>
        <input type="text" id="product-name" formControlName="name">
        @if (name.invalid && name.touched) {
            <p class="error">El nombre es obligatorio</p>
        }
    </fieldset>

    <fieldset>
        <label for="product-price">Precio</label>
        <input type="number" id="product-price" formControlName="price">
        @if (price.invalid && price.touched) {
            <p class="error">El precio es obligatorio</p>
        }
    </fieldset>

    <fieldset>
        <label for="product-stock">Stock</label>
        <input type="number" id="product-stock" formControlName="stock">
        @if (stock.hasError('required') && stock.touched) {
            <p class="error">El stock es obligatorio</p>
        } @else if(stock.hasError('min') && stock.touched) {
            <p class="error">El stock debe ser mayor o igual a 10</p>
        }
    </fieldset>

    <button [disabled]="productForm.invalid">Agregar producto</button>
</form>
```

## CRUD

Primero crear una clase ProductService

```bash
ng g s services/product-service
```

En product-service.ts

```ts
export class ProductService {
  readonly URL = "http://localhost:3001/productos";

  products: Product[];

  constructor(private http: HttpClient){
    this.products = [];
  }
}
```

En app.config.ts importar provideHttpClient y agregarlo a los providers

```ts
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient()
  ]
};
```

### GET

#### getProducts()

En product-service.ts

```ts
getProducts(){
    return this.http.get<Product[]>(this.URL);
}
```

En list-page.ts

``` ts
export class ListPage implements OnInit{

  constructor(public pService: ProductService, private router: Router){}

  ngOnInit(): void {
      this.getProducts();
  }

  getProducts(){
    this.pService.getProducts().subscribe({
      next: (data) => {this.pService.products = data},
      error: (e) => {console.log(e);
      }
    })
  }
}
```

Importar RouterLink en list-page.ts 

```ts
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-list-page',
  imports: [RouterLink],
  templateUrl: './list-page.html',
  styleUrl: './list-page.css'
})
```

En list-page.html

```html
<ul>
    @for (product of pService.products; track $index) {
        <li>
            <a [routerLink]="product.id">
                <h3> {{product.name}} </h3>
            </a>
            <button>Eliminar</button>
            <button>Editar</button>
        </li>
    }
</ul>
```

#### getProduct()

En product-service.ts

```ts
getProduct(id: string){
    return this.http.get<Product>(`${this.URL}/${id}`)
}
```

En details-page.ts

```ts
export class DetailsPage implements OnInit{
  selectedProduct: Product | undefined;

  constructor(private route: ActivatedRoute, public pService: ProductService){}

  ngOnInit(): void {
      const productId = this.route.snapshot.params['id'];
      this.getProduct(productId);
  }

  getProduct(id: string){
    this.pService.getProduct(id).subscribe({
      next: (data) => {this.selectedProduct = data},
      error: (e) => {console.log(e)}
    })
  }
}
```

En details-page.html

```html
@if (selectedProduct) {
    <div>
        <h3>
            {{selectedProduct.name}}
        </h3>
        <h4>
            {{selectedProduct.price}}
        </h4>
        <h4>
            {{selectedProduct.stock}}
        </h4>
    </div>
} @else {
    <h3>No existe producto</h3>
}
```

### POST

En product-service.ts

```ts
postProduct(p: Product){
    return this.http.post<Product>(this.URL, p);
}
```

En form-page.ts

```ts
sendProduct(){
    this.pService.postProduct(this.productForm.value).subscribe({
        next: (data) => {console.log(data)},
        error: (e) => {console.log(e)}
    })
    this.productForm.reset()
}
```

En form-page.html, agregar (ngSubmit)="sendProduct()" en la etiquta form

```html
<form [formGroup]="productForm" (ngSubmit)="sendProduct()">
```

### PUT

En product-service.ts

```ts
updateProduct(p: Product){
    return this.http.put<Product>(`${this.URL}/${p.id}`, p);
}
```

En form-edit-page.ts

```ts
export class FormEditPage implements OnInit{
  productForm!: FormGroup;
  productId!: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private pService: ProductService
  ){}

  get name() {
    return this.productForm.get('name')!;
  }

  get price() {
    return this.productForm.get('price')!;
  }

  get stock() {
    return this.productForm.get('stock')!;
  }

  ngOnInit(): void {
      this.productId = this.route.snapshot.params['id'];

      this.productForm = this.fb.group({
        name: ['', Validators.required],
        price: ['', Validators.required],
        stock: ['', [Validators.required, Validators.min(10)]]
      });

      this.pService.getProduct(this.productId).subscribe({
        next: (data) => {this.productForm.patchValue(data)},
        error: (e) => {console.log(e)}
      });
  }

  sendProduct(){
    const updatedProduct = {
      ...this.productForm.value,
      id: this.productId
    };
    
    this.pService.updateProduct(updatedProduct).subscribe({
      next: () => {
        alert('Producto editado correctamente.');
        this.router.navigate(['/product-list']);
      },
      error: (e) => {console.log(e)}
    })
  }
}
```

Importar ReactiveFormsModule.

En form-edit-page.html

```html
<form [formGroup]="productForm" (ngSubmit)="sendProduct()">
    <fieldset>
        <label for="product-name">Nombre</label>
        <input type="text" id="product-name" formControlName="name">
        @if (name.invalid && name.touched) {
            <p class="error">El nombre es obligatorio</p>
        }
    </fieldset>

    <fieldset>
        <label for="product-price">Precio</label>
        <input type="number" id="product-price" formControlName="price">
        @if (price.invalid && price.touched) {
            <p class="error">El precio es obligatorio</p>
        }
    </fieldset>

    <fieldset>
        <label for="product-stock">Stock</label>
        <input type="number" id="product-stock" formControlName="stock">
        @if (stock.hasError('required') && stock.touched) {
            <p class="error">El stock es obligatorio</p>
        } @else if(stock.hasError('min') && stock.touched) {
            <p class="error">El stock debe ser mayor o igual a 10</p>
        }
    </fieldset>

    <button [disabled]="productForm.invalid">Agregar producto</button>
</form>
```

En list-page.ts

```ts
editProduct(p: Product){
    this.router.navigate(['/product-list/edit', p.id]);
}
```

En list-page.html

```html
<button (click)="editProduct(product)">Editar</button>
```

### DELETE

En product-service.ts

```ts
deleteProduct(id: string){
    return this.http.delete<void>(`${this.URL}/${id}`);
}
```

En list-page.ts

```ts
removeProduct(id: string){
    this.pService.deleteProduct(id).subscribe({
        next: (data) => {
            console.log(data);
            this.getProducts();
        },
        error: (e) => {console.log(e)}
    })
}
```

En list-page.html

```html
<button (click)="removeProduct(product.id)">Eliminar</button>
```

