import { Component } from '@angular/core';

interface ISocial {
  link: string,
  img: string,
}

@Component({
  selector: 'app-social-footer',
  templateUrl: './social-footer.component.html',
  styleUrls: ['./social-footer.component.scss'],
})
export class SocialFooterComponent {
  public socials: Array<ISocial> = [
    {
      link: 'https://www.google.com/',
      img: '../../../../../../assets/vk.svg',
    },
    {
      link: 'https://www.google.com/',
      img: '../../../../../../assets/fb.svg',
    },
    {
      link: 'https://www.google.com/',
      img: '../../../../../../assets/instagram.svg',
    },
    {
      link: 'https://www.google.com/',
      img: '../../../../../../assets/ok.svg',
    },
    {
      link: 'https://www.google.com/',
      img: '../../../../../../assets/youtube.svg',
    },
  ];
}
