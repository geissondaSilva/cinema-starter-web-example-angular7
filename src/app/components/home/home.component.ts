import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatButton } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    @ViewChild('btnSearch') public btnSearch: MatButton;
    @ViewChild('inputSearch') public inputSearch: ElementRef<HTMLInputElement>;

    constructor() { }

    ngOnInit() {
    }

    public abrirCampo(){
        let btn = document.getElementById('btnSearch');
        btn.style.marginLeft = '0'
        this.inputSearch.nativeElement.style.display = 'flex';
    }

    public closeBusca(){
        let btn = document.getElementById('btnSearch');
        btn.style.marginLeft = '100%'
        this.inputSearch.nativeElement.style.display = 'none';
    }

}
