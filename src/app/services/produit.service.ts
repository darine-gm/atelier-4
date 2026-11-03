import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  apiURL: string = 'http://localhost:8090/produits/api';

  constructor(private http: HttpClient) {
    console.log('création du service produit');
    /*this.produits = [
      { idProduit: 1, nomProduit: "PC Asus", prixProduit: 3000.600, dateCreation: new Date("01/14/2011") },
      { idProduit: 2, nomProduit: "Imprimante Epson", prixProduit: 450, dateCreation: new Date("12/17/2010") },
      { idProduit: 3, nomProduit: "Tablette Samsung Asus", prixProduit: 900.123, dateCreation: new Date("02/20/2020") },
    ];*/
  }

  listeProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiURL);
  }

  ajouterProduit(prod: Produit):Observable<Produit> {
    return this.http.post<Produit>(this.apiURL, prod, httpOptions);
  }

  supprimerProduit(id: number): Observable<void> {
   const url = `${this.apiURL}/${id}`;
    return this.http.delete<void>(url, httpOptions);
  }

  consulterProduit(id: number): Observable<Produit> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Produit>(url);
  }

  updateProduit(prod: Produit): Observable<Produit> {
    return this.http.put<Produit>(this.apiURL, prod, httpOptions);
  }
}
