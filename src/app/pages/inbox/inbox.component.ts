import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inbox',
  imports: [RouterModule, CommonModule],
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.css',
})
export class InboxComponent implements OnInit {
  messages = [
    {
      id: 1,
      subject: 'New Task Assignment',
      sender: 'Ali Mansour',
      date: new Date('2024-04-15'),
      senderImage:
        'https://api.dicebear.com/9.x/micah/svg?seed=Sara&hair=dannyPhantom,fonze,full,mrClean&backgroundColor[]',
      content:
        'You have been assigned a new task regarding the upcoming project launch. Please check the task board for more details.',
    },
    {
      id: 2,
      subject: 'Meeting Rescheduled',
      sender: 'Sara Khaled',
      date: new Date('2024-04-13'),
      senderImage:
        'https://api.dicebear.com/9.x/micah/svg?seed=Katherine&hair=dannyPhantom,fonze,full,mrClean&backgroundColor[]',
      content:
        'The team meeting scheduled for next week has been rescheduled to Thursday, April 20th. Please make a note of the change.',
    },
    {
      id: 3,
      subject: 'Important System Update',
      sender: 'Mohamed Tarek',
      date: new Date('2024-04-12'),
      senderImage: 'https://api.dicebear.com/9.x/micah/svg?seed=Jude',
      content:
        'A system update is planned for this weekend. Please make sure you back up all important files before Friday.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
