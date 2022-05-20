import { Injectable } from '@nestjs/common';

import { Url } from './url.modal';

@Injectable()
export class UrlsService {
  urls: Url[] = [
    {
      id: '1',
      title: 'Redux',
      link: 'https://redux.js.org/',
    },
    {
      id: '2',
      title: 'Funny cats',
      link: 'https://funnycatshumor.tumblr.com/post/175608997516',
    },
    {
      id: '3',
      title: 'Redux',
      link: 'https://redux.js.org/',
    },
    {
      id: '4',
      title: 'Funny cats',
      link: 'https://funnycatshumor.tumblr.com/post/175608997516',
    },
    {
      id: '5',
      title: 'Redux',
      link: 'https://redux.js.org/',
    },
    {
      id: '6',
      title: 'Funny cats',
      link: 'https://funnycatshumor.tumblr.com/post/175608997516',
    },
    {
      id: '7',
      title: 'Redux',
      link: 'https://redux.js.org/',
    },
    {
      id: '8',
      title: 'Funny cats',
      link: 'https://funnycatshumor.tumblr.com/post/175608997516',
    },
  ];

  getUrls() {
    return [...this.urls];
  }
}
