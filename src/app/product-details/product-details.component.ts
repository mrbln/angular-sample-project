import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Product, products } from "../products";
import { CartService } from "../cart.service";

@Component({
    selector: "app-product-details",
    templateUrl: "./product-details.component.html",
    styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
    // or ! can be used...
    product: Product | undefined;

    constructor(
        private route: ActivatedRoute,
        private cartService: CartService
    ) {}

    ngOnInit(): void {
        const productId = Number(this.route.snapshot.paramMap.get("productId"));
        this.product = products.find((p) => p.id === productId);
    }

    addToCart(product: Product) {
      this.cartService.addItems(product);
      window.alert('Your product has been added to the cart!');
    }
}
