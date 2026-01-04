import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

import { EquipoService } from '../../services/equipo.service';
import { PartidoService } from '../../services/partido.service';
import { JugadorService } from '../../services/jugador.service';

Chart.register(...registerables);

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.css'
})
export class EstadisticasComponent implements AfterViewInit {

  constructor(
    private equipoService: EquipoService,
    private jugadorService: JugadorService,
    private partidoService: PartidoService
  ) {}

  ngAfterViewInit(): void {
    this.equiposPorLiga();
    this.promedioJugadores();
    this.partidosGanados();
  }

  // Doughnut elegante
  equiposPorLiga() {
    this.equipoService.getEquipos().subscribe(equipos => {
      const data = new Map<number, number>();
      equipos.forEach(e => data.set(e.ligaId, (data.get(e.ligaId) || 0) + 1));

      new Chart('equiposLigaChart', {
        type: 'doughnut',
        data: {
          labels: [...data.keys()].map(l => `Liga ${l}`),
          datasets: [{
            data: [...data.values()],
            backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#f6c23e'],
            borderWidth: 0
          }]
        },
        options: {
          plugins: {
            legend: { position: 'bottom' }
          }
        }
      });
    });
  }

  // Línea suave con puntos
  promedioJugadores() {
    this.jugadorService.getJugadores().subscribe(jugadores => {
      const map = new Map<number, number>();
      jugadores.forEach(j => map.set(j.equipoId, (map.get(j.equipoId) || 0) + 1));

      new Chart('jugadoresChart', {
        type: 'line',
        data: {
          labels: [...map.keys()].map(e => `Equipo ${e}`),
          datasets: [{
            label: 'Jugadores',
            data: [...map.values()],
            borderColor: '#36b9cc',
            backgroundColor: 'rgba(54,185,204,0.2)',
            tension: 0.4,
            fill: true,
            pointRadius: 5
          }]
        },
        options: {
          plugins: {
            legend: { display: false }
          }
        }
      });
    });
  }

  // Barras horizontales (ranking)
  partidosGanados() {
    this.partidoService.getPartidos().subscribe(partidos => {
      const wins = new Map<number, number>();

      partidos.forEach(p => {
        if (p.golesLocal > p.golesVisitante) {
          wins.set(p.equipoLocalId, (wins.get(p.equipoLocalId) || 0) + 1);
        } else if (p.golesVisitante > p.golesLocal) {
          wins.set(p.equipoVisitanteId, (wins.get(p.equipoVisitanteId) || 0) + 1);
        }
      });

      new Chart('ganadosChart', {
        type: 'bar',
        data: {
          labels: [...wins.keys()].map(e => `Equipo ${e}`),
          datasets: [{
            data: [...wins.values()],
            backgroundColor: '#e74a3b',
            borderRadius: 10
          }]
        },
        options: {
          indexAxis: 'y',
          plugins: {
            legend: { display: false }
          }
        }
      });
    });
  }
}