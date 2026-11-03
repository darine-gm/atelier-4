import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './produits.component.html'
})
export class ProduitsComponent implements OnInit {
  produits: Produit[] = [];

  constructor(private produitService: ProduitService) {
    //this.produits = [];
  }

  ngOnInit(): void {
    this.chargerProduits();
  }

  private chargerProduits(): void {
    this.produitService.listeProduits().subscribe(prods => {
      console.log(prods);
      this.produits = prods;
}); 
  }

  supprimerProduit(prod: Produit) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf && prod.idProduit!= undefined) {
      this.produitService.supprimerProduit(prod.idProduit).subscribe(() => {
        console.log("produit supprimé");
        this.chargerProduits();
      });
  }
  }
}
