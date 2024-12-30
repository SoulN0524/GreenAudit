import { NgClass, NgFor } from '@angular/common';
import {
  Component,
  NgModule,
  OnInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-sustainable-gpt',
  templateUrl: './sustainable-gpt.component.html',
  styleUrl: './sustainable-gpt.component.scss',
  standalone: true,
  imports: [FormsModule, NgFor, NgClass],
})
export class SustainableGPTComponent implements OnInit {
  @ViewChild('chatContainer') chatContainer: ElementRef | undefined;
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
    `ESG（環境、社會、公司治理）對消費者的影響日益顯著，改變了他們的購買決策與行為模式。在環境層面，注重 ESG 的企業通過減少碳排放、使用永續材料及包裝等舉措，讓消費者感到產品更環保且具有社會責任感；而在社會層面，支持公平貿易及確保無剝削供應鏈的品牌，吸引了注重道德消費的群體。這不僅提升了消費者對品牌的信任度，也直接影響了他們的購買選擇，許多人會優先選擇 ESG 表現優異的企業產品，甚至抵制在環境破壞或勞工剝削上表現不佳的企業。此外，企業的 ESG 策略還為產品賦予更高的價值感，消費者在購買此類產品時，往往覺得自己不僅獲得了商品，還參與了善舉，增加了心理滿足感。例如，購買支持環保計畫的商品，讓消費者感受到自身對永續發展的貢獻。同時，節能家電或可重複使用商品等 ESG 友好的選擇，既符合環保需求，也能在長期使用中節省成本，帶來經濟上的價值。此外，ESG 也推動了消費行為的轉變，越來越多消費者開始偏好健康、環保的生活方式，例如選擇有機食品或減少一次性用品的使用。隨著企業不斷提升 ESG 透明度，消費者能更清楚地了解產品背後的影響，這不僅教育了消費者，也增強了他們對永續行動的參與感，進一步促使 ESG 成為消費決策的重要考量因素。`,
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
        this.scrollToBottom();
      } else {
        clearInterval(interval);
        this.botTyping = false;
      }
    }, 10);
  }

  scrollToBottom(): void {
    if (this.chatContainer) {
      this.chatContainer.nativeElement.scrollTop =
        this.chatContainer.nativeElement.scrollHeight;
    }
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
