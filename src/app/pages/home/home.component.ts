import { Component, OnInit } from '@angular/core';
import { TopService } from './../../services/top.service';
import { RecientesService } from './../../services/recientes.service';
import { MasvistosService } from './../../services/masvistos.service';
declare var jQuery: any;
declare var dtGonza: {
        'api': '',
        'nonce': '09358e2c73',
        'area': 'live-search',
        'button': '.search-button',
        'more': 'Ver todos los resultados',
        'mobile': 'false',
        'reset_all': '\u00bfRealmente quieres reiniciar todos los datos?',
        'manually_content': 'Seguro que ya haz agregado contenido para mostrar?',
        'loading': 'Cargando...',
        'loadingplayer': 'Cargando video..',
        'selectaplayer': 'Seleccione un v\u00eddeo',
        'playeradstime': '7',
        'autoplayer': '1',
        'livesearchactive': '1'
        };


declare var dtAjax: {
        'url': '',
        'loading': 'Cargando...',
        'afavorites': 'A\u00f1adir a favoritos',
        'rfavorites': 'Eliminar de favoritos',
        'remove': 'Eliminar',
        'isawit': 'Ya lo vi',
        'send': 'Enviar datos..',
        'updating': '"Actualizando datos..',
        'error': 'Error',
        'pending': 'Moderaci\u00f3n pendiente',
        'ltipe': 'Descarga',
        'sending': 'Enviando datos',
        'enabled': 'Habilitar',
        'trash': 'Eliminar',
        'lshared': 'Enlaces compartidos',
        'ladmin': 'Administrar links pendentes',
        'sendingrep': 'Por favor espere, enviando datos..',
        'ready': 'Listo',
        'deletelin': '\u00bfRealmente desea eliminar este enlace?'
};


declare var ss_l18n: {
    'enable_movies': '1',
    'enable_tvshows': '1',
    'enable_seasons': '1',
    'enable_episodes': '1',
    'nonce': '',
    'url': '',
};
declare var a3_lazyload_extend_params: {
              'edgeY': '0'
            };
import * as dsa from 'src/assets/js/jquery.lazyloadxt.extend.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( public topService: TopService, public recienService: RecientesService, public masvistosService: MasvistosService) { }

  public ngOnInit() {
    jQuery(document).ready(function($) {
      $('#featured-titles').owlCarousel({
        autoPlay: false,
        items: 4,
        stopOnHover: true,
        pagination: false,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [980, 4],
        itemsTablet: [768, 3],
        itemsTabletSmall: false,
        itemsMobile: [479, 2]
    });
    $('.nextf').click(function() {
        $('#featured-titles').trigger('owl.next')
    });
    $('.prevf').click(function() {
        $('#featured-titles').trigger('owl.prev')
    });
    $('#dt-tvshows').owlCarousel({
        autoPlay: false,
        items: 5,
        stopOnHover: true,
        pagination: false,
        itemsDesktop: [1199, 5],
        itemsDesktopSmall: [980, 5],
        itemsTablet: [768, 4],
        itemsTabletSmall: false,
        itemsMobile: [479, 3]
    });
    $('.next4').click(function() {
        $('#dt-tvshows').trigger('owl.next')
    });
    $('.prev4').click(function() {
        $('#dt-tvshows').trigger('owl.prev')
    });
    $('#dt-episodes').owlCarousel({
        autoPlay: false,
        pagination: false,
        items: 3,
        stopOnHover: true,
        itemsDesktop: [900, 3],
        itemsDesktopSmall: [750, 3],
        itemsTablet: [500, 2],
        itemsMobile: [320, 1]
    });
    $('.next').click(function() {
        $('#dt-episodes').trigger('owl.next')
    });
    $('.prev').click(function() {
        $('#dt-episodes').trigger('owl.prev')
    });
    $('#dt-seasons').owlCarousel({
        autoPlay: false,
        items: 5,
        stopOnHover: true,
        pagination: false,
        itemsDesktop: [1199, 5],
        itemsDesktopSmall: [980, 5],
        itemsTablet: [768, 4],
        itemsTabletSmall: false,
        itemsMobile: [479, 3]
    });
    $('.next2').click(function() {
        $('#dt-seasons').trigger('owl.next')
    });
    $('.prev2').click(function() {
        $('#dt-seasons').trigger('owl.prev')
    });
    $('#slider-movies').owlCarousel({
        autoPlay: 4000,
        items: 2,
        stopOnHover: true,
        pagination: true,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 2],
        itemsTabletSmall: [600, 1],
        itemsMobile: [479, 1]
    });
    $('#slider-tvshows').owlCarousel({
        autoPlay: 4000,
        items: 2,
        stopOnHover: true,
        pagination: true,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 2],
        itemsTabletSmall: [600, 1],
        itemsMobile: [479, 1]
    });
    $('#slider-movies-tvshows').owlCarousel({
        autoPlay: 4000,
        items: 2,
        stopOnHover: true,
        pagination: true,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 2],
        itemsTabletSmall: [600, 1],
        itemsMobile: [479, 1]
    });
    $('.reset').click(function(event) {
        if (!confirm(dtGonza.reset_all)) {
            event.preventDefault()
        }
    });
    $('.addcontent').click(function(event) {
        if (!confirm(dtGonza.manually_content)) {
            event.preventDefault()
        }
    });

    
    });
  }

}
