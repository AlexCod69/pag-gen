import { Component, OnInit } from '@angular/core';
import { ItemloadInterface } from './../../interfaces/itemload.interface';
import { ActivatedRoute } from '@angular/router';
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
  selector: 'app-item-video',
  templateUrl: './item-video.component.html',
  styleUrls: ['./item-video.component.css']
})

//declare var url: 'https://www.youtube.com/embed/6DHDIDgn2oA';

export class ItemVideoComponent implements OnInit {
  item: ItemloadInterface;
  id: string;
  cargando = true;
  url: string;
  src = '';

  constructor( private route: ActivatedRoute,
               public recientesService: RecientesService,
               public masvistosService: MasvistosService ) {
               }
/**
 * name
 */

  public ngOnInit() {

    this.route.params
      .subscribe(parametros => {
        this.recientesService.getItem(parametros['id']),
        this.masvistosService.getItem(parametros['id'])
          .subscribe((item: ItemloadInterface) => {
            this.id = parametros['id'];
            this.item = item;
            this.url = item.Video;
            this.cargando = false;
          const SRC = item.Video;

   jQuery(document).ready(function($) {
      $(document).on('click', '.dooplay_player_option', function() {
        const post = $(this).data('post'),
        nume = $(this).data('nume'),
        cero = '0',
        type = $(this).data('type'),
        tviw = $('#playernotice').data('text'),
        scds = dtGonza.playeradstime,
        srclink = SRC;

        if (!$(this).hasClass('on')) {
            $('.dooplay_player_option').removeClass('on');
            $('#player-option-' + nume + '> span.loader').show();
            $('#played-' + post).removeClass('animation-35');
            $('#playeroptions').addClass('onload');
            if ( scds > cero) {
              $('#playernotice').addClass('flashit');
              $('#playernotice').html('<b id="countdown"></b> ' + dtGonza.loadingplayer);
              $('#countdown').html(scds);
          }
            if (scds > cero) {
              countdown();
          }
           // Envents
           $('html, body').animate({scrollTop : 0}, 200 );
           $('#player-option-' + nume + ' > span.loader').hide();
           $('#played-' + post).addClass('animation-35');
           $('#playcontainer').addClass('isnd');
           $('.asgdc').show();
           $('#dooplay_player_response').html('<div class="preplayer"></div>');
           // Time out
           setTimeout(function() {
            $('.asgdc').hide();
            $('#dooplay_player_response').html('<div class="pframe">' + srclink + '</div>');
            $('#playeroptions').removeClass('onload');
           // console.log(srclink);

            if (scds > cero) {
                $('#playernotice').html(tviw);
                $('#playernotice').removeClass('flashit');
            }
          }, 7 * 1000);
        }
        return false;
        // const tviw = $('#playernotice').data('text');
        // console.log(name);
    });
    // Auto Player
    if ($('#player-option-1').length === 1) {
      if (dtGonza.autoplayer) {
          setTimeout(function() {
              $('#player-option-1').trigger('click');
          }, FireTime(100, 3000));
      }
  }
     // Random number
     function FireTime(min, max ) {
      return Math.floor(Math.random() * (max - min + 1) + min );
    }
    function countdown(CountID = '#countdown') {
      if ($(CountID).length === 1) {
          let Seconds;
          Seconds = $(CountID).text();
          Seconds = parseInt(Seconds, 10);
          if (Seconds === 1) {
              $(CountID).remove();
              return;
          }
          Seconds--;
          $(CountID).html(Seconds);
          setTimeout(countdown, 1000);
      }
     }

   });
  });
  });
  }

}
