import { Controller, Get, Post } from '@nestjs/common';

import { UrlsService } from './urls.service';

@Controller('urls')
export class UrlsController {
  constructor(private urlsService: UrlsService) {}

  @Get()
  getAllUrls() {
    return this.urlsService.getUrls();
  }
}
