import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

if (String(process.env["ENV"]).toLowerCase() === "production") {
    enableProdMode();
}

import { AppModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule);
