import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class WorkoutService {
    http: any;
    apiKey: String;
    workoutUrl: String;

    constructor(http:Http) {
        this.http = http;
        this.apiKey = '';
        this.workoutUrl = '';
    }

    getWorkouts() {
        return this.http.get(this.workoutUrl+'?apiKey='+this.apiKey)
            .map(res => res.json());
    }

    addWorkout(workout) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.workoutUrl+'?apiKey='+this.apiKey, JSON.stringify(workout), {headers: headers})
            .map(res => res.json());
    }

    deleteWorkout(workoutId) {
        return this.http.delete(this.workoutUrl+'/'+workoutId+'?apiKey='+this.apiKey)
            .map(res => res.json());
    }
}
