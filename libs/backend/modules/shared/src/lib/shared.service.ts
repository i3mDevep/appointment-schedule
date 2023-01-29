import { Injectable } from '@nestjs/common';

@Injectable()
export class SharedService {
  getData(): { message: string } {
    return { message: 'Shared module' };
  }
}
