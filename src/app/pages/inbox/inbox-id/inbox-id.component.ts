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
  sentMessage: any;
  replyContent: string = '';
  message = [
    {
      id: 1,
      subject: 'New Task Assignment',
      sender: 'Ali Mansour',
      date: new Date('2024-04-15'),
      senderImage:
        'https://api.dicebear.com/9.x/micah/svg?seed=Sara&hair=dannyPhantom,fonze,full,mrClean&backgroundColor[]',
      content:
        'You have been assigned a new task regarding the upcoming project launch. Please check the task board for more details.',
      replies: [],
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
      replies: [],
    },
    {
      id: 3,
      subject: 'Important System Update',
      sender: 'Mohamed Tarek',
      date: new Date('2024-04-12'),
      senderImage: 'https://api.dicebear.com/9.x/micah/svg?seed=Jude',
      content:
        'A system update is planned for this weekend. Please make sure you back up all important files before Friday.',
      replies: [],
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const messageId = this.route.snapshot.paramMap.get('id');
    this.loadMessage(messageId);
  }

  loadMessage(id: string | null): void {
    this.sentMessage = this.message.find((msg) => msg.id === Number(id));
  }

  sendReply(): void {
    if (this.replyContent.trim()) {
      console.log('Reply Sent:', this.replyContent);

      const reply = {
        messageId: this.sentMessage.id,
        replyContent: this.replyContent,
        sender: 'You',
        date: new Date(),
      };
      if (!this.sentMessage.replies) {
        this.sentMessage.replies = [];
      }
      this.sentMessage.replies.push(reply);

      this.replyContent = '';

      console.log('Reply has been successfully sent.');
    } else {
      console.log('Please write a reply before sending.');
    }
  }
}
