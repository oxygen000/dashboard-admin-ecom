import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-users',
  imports: [RouterModule, CommonModule, FormsModule, ChartModule],
  standalone: true,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  users = [
    {
      name: 'Ali Mansour',
      email: 'ali.mansour@example.com',
      joined: new Date('2024-01-15'),
      image:
        'https://api.dicebear.com/9.x/micah/svg?seed=Sara&hair=dannyPhantom,fonze,full,mrClean&backgroundColor[]',
    },
    {
      name: 'Sara Khaled',
      email: 'sara.khaled@example.com',
      joined: new Date('2023-12-22'),
      image:
        'https://api.dicebear.com/9.x/micah/svg?seed=Katherine&hair=dannyPhantom,fonze,full,mrClean&backgroundColor[]',
    },
    {
      name: 'Mohamed Tarek',
      email: 'mohamed.tarek@example.com',
      joined: new Date('2023-11-10'),
      image: 'https://api.dicebear.com/9.x/micah/svg?seed=Jude',
    },
    {
      name: 'Nour Adel',
      email: 'nour.adel@example.com',
      joined: new Date('2024-02-05'),
      image: 'https://api.dicebear.com/9.x/micah/svg?seed=Leah&mouth=laughing,smile,smirk',
    },
    {
      name: 'Khaled Samir',
      email: 'khaled.samir@example.com',
      joined: new Date('2024-03-08'),
      image:
        'https://api.dicebear.com/9.x/micah/svg?seed=Ryker&hair=dannyPhantom,fonze,full,mrClean&backgroundColor[]',
    },
  ];
}
