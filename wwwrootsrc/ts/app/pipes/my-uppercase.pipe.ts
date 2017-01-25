import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "myUppercase",
})
export class MyUpperCasePipe implements PipeTransform {
    public transform(value: string) {
        return String(value).toUpperCase();
    }
}
