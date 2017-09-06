import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newsType'
})
export class NewsTypePipe implements PipeTransform {

  transform(value: string): any {
    switch (value) {
      case 'dept':
        return '系所公告';
      case 'activity':
        return '活動公告';
      case 'speech':
        return '演講公告';
      case 'other':
        return '其他公告';
      case 'masterexam':
        return '碩士學位考試公告';
      case 'phdexam':
        return '博士學位考試公告';
    }
  }

}
