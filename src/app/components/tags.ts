import { Component, OnInit } from "@angular/core";

import { TagModel } from "../models/tag";
import { TagsService } from "../services/tag";
import { TranslateService } from "ng2-translate";

@Component({
    selector: "tags-component",
    templateUrl: "../../views/tags.html",
    styleUrls: ["../../styles/tags.css"]
})

export class Tags implements OnInit {

    private cats: TagModel[];
    private message: string;

    constructor(
        private cat: TagsService,
        private trans: TranslateService
    ) { this.message = ""; }

    getTags() {
        this.cat.all().subscribe(
            c => this.cats = c,
            error => this.message = <any>error,
            () => this.trans.get("DoneAllTagsPage").subscribe((res: string) => console.log(res))
        );
    }

    ngOnInit() {
        this.getTags();
    }
}
