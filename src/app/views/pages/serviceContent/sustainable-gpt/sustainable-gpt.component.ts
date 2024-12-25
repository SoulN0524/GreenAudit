import { NgClass, NgFor } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-sustainable-gpt',
  templateUrl: './sustainable-gpt.component.html',
  styleUrl: './sustainable-gpt.component.scss',
  standalone: true,
  imports: [FormsModule, NgFor, NgClass],
})
export class SustainableGPTComponent implements OnInit {
  messages: { text: string; sender: 'user' | 'bot' }[] = [];
  chatInput: string = '';
  botTyping: boolean = false;
  botResponses: string[] = [
    `永續發展是一個非常重要且複雜的議題，它關係到我們現在和未來的生活品質。這涵蓋了環境保護、經濟發展和社會公平三大層面。關於永續發展，我的看法如下：
環境保護：這是永續發展的核心。保護自然資源、減少污染和生物多樣性的保護是關鍵。我們需要推動綠色能源、減少碳排放、保護森林和水資源。
經濟發展：發展經濟不應以犧牲環境為代價。我們需要尋找可持續的經濟模式，推動循環經濟，減少浪費，提高資源利用效率。
社會公平：確保所有人都能享有發展帶來的利益，這意味著消除貧困、提供公平的教育和醫療機會，促進社會包容性。
永續發展需要全球的協作和創新，不僅是政府和企業的責任，也是每個人的責任。我們每一個人都可以通過日常行動，像是減少浪費、節約能源、支持環保產品等，為永續發展貢獻一份力量。

對於永續發展，你有什麼具體的想法或問題嗎？`,
"操"
  ];

  constructor() {}

  ngOnInit(): void {}

  sendMessage(): void {
    if (this.botTyping) {
      return;
    }

    const userMessage = this.chatInput.trim();
    if (userMessage) {
      this.messages.push({ text: userMessage, sender: 'user' });
      this.chatInput = '';

      // 模擬機器人回覆
      setTimeout(() => {
        const botReply =
          this.botResponses[
            Math.floor(Math.random() * this.botResponses.length)
          ];
        this.typeBotMessage(botReply);
      }, 1000);
    }
  }

  typeBotMessage(message: string): void {
    this.botTyping = true;
    let index = 0;
    const interval = setInterval(() => {
      if (index < message.length) {
        const currentText = message.slice(0, index + 1);
        if (
          this.messages.length === 0 ||
          this.messages[this.messages.length - 1].sender !== 'bot'
        ) {
          this.messages.push({ text: currentText, sender: 'bot' });
        } else {
          this.messages[this.messages.length - 1].text = currentText;
        }
        index++;
      } else {
        clearInterval(interval);
        this.botTyping = false;
      }
    }, 10);
  }

  uploadFile(fileInput: HTMLInputElement): void {
    const files = fileInput.files;
    if (files && files.length > 0) {
      const fileNames = Array.from(files)
        .map((file) => file.name)
        .join(', ');
      alert(`檔案 ${fileNames} 已匯入`);
    } else {
      alert('請選擇一個或多個檔案');
    }
  }
}
