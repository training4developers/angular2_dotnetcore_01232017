import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "myLength",
    pure: true,
})
export class MyLengthPipe implements PipeTransform {
    public transform(value: any[]) {
        console.log("my length pipe ran");
        return value.length;
    }
}
