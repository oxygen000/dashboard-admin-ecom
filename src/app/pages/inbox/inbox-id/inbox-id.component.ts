import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inbox',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './inbox-id.component.html',
  styleUrl: './inbox-id.component.css',
})
export class InboxIdComponent implements OnInit {
  message: any;
  replyContent: string = '';
  sentMessage: any = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const messageId = this.route.snapshot.paramMap.get('id');
    this.loadMessage(messageId);
  }

  loadMessage(id: string | null): void {
    const messages = [
      {
        id: '1',
        subject: 'New Task Assignment',
        sender: 'John Doe',
        date: new Date('2024-04-15'),
        content:
          'You have been assigned a new task regarding the upcoming project launch. Please check the task board for more details.',
      },
      {
        id: '2',
        subject: 'Meeting Rescheduled',
        sender: 'Sara Ali',
        date: new Date('2024-04-13'),
        content:
          'The team meeting scheduled for next week has been rescheduled to Thursday, April 20th. Please make a note of the change.',
      },
      {
        id: '3',
        subject: 'Important System Update',
        sender: 'System Admin',
        date: new Date('2024-04-12'),
        content:
          'A system update is planned for this weekend. Please make sure you back up all important files before Friday.',
      },
    ];

    this.message = messages.find((msg) => msg.id === id);
  }

  sendReply(): void {
    if (this.replyContent.trim()) {
      this.sentMessage = {
        subject: 'Re: ' + this.message.subject,
        sender: 'You',
        date: new Date(),
        content: this.replyContent,
      };
      console.log('Reply Sent:', this.replyContent);
      this.replyContent = '';
    } else {
      console.log('Reply content is empty');
    }
  }
}
