import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-movies-kpi",
  templateUrl: "./movies-kpi.component.html",
  styleUrls: ["./movies-kpi.component.scss"]
})
export class MoviesKpiComponent implements OnInit {
  @Input() data: any;
  moviesInfo: any;

  constructor(private UtilitityService: DataService) { }

  getMovieInfo() {
    var url = this.data;
    const newURL = url.replace("http:", "https:");
    this.UtilitityService.getMovieByID(newURL).subscribe(
      res => {
        this.moviesInfo = res;
      },
      error => {
        alert("No Data to Display");
      }
    );
  }

  ngOnInit() {
    this.getMovieInfo();
  }
}
