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
          backgroundColor: ['#7c3aed', '#6366f1', '#ec4899', '#f59e0b'],
          borderWidth: 6,
          borderColor: '#ffffff'
        }]
      },
      options: {
        cutout: '65%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              boxWidth: 12
            }
          }
        }
      }
    });
  });
}

promedioJugadores() {
  this.jugadorService.getJugadores().subscribe(jugadores => {
    const map = new Map<number, number>();
    jugadores.forEach(j => map.set(j.equipoId, (map.get(j.equipoId) || 0) + 1));

    new Chart('jugadoresChart', {
      type: 'line',
      data: {
        labels: [...map.keys()].map(e => `Equipo ${e}`),
        datasets: [{
          data: [...map.values()],
          borderColor: '#10b981',
          backgroundColor: 'rgba(16,185,129,0.35)',
          fill: true,
          tension: 0.45,
          pointRadius: 0,
          borderWidth: 3
        }]
      },
      options: {
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: { grid: { display: false }},
          y: { grid: { color: '#e5e7eb' }}
        }
      }
    });
  });
}

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
          backgroundColor: '#ef4444',
          borderRadius: 12,
          barThickness: 28
        }]
      },
      options: {
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: { grid: { display: false }},
          y: { grid: { color: '#e5e7eb' }}
        }
      }
    });
  });
}


}