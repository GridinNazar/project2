"use strict";

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {    
                let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
            
                while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
                    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
                }
            },
    rememberMyFilms: function () {
                        for (let i = 0; i < 2; i++) {
                            let movie = 0;
                            let rate = 0;
                            while ((!movie) || (movie.length > 50)) {
                                movie = prompt('Один из последних просмотренных фильмов?', '');
                            }
                            while ((!rate) || (rate.length > 50)) {
                                rate = prompt('На сколько оцените его?', '');
                            }
                            personalMovieDB.movies[movie] = rate;
                        }
                    },
    detectPersonalLevel: function () {
                            if (personalMovieDB.count < 10) {
                                alert('Просмотрено довольно мало фильмов');
                            } else if (personalMovieDB.count <= 30) {
                                alert('Вы классический зритель');
                            } else if (personalMovieDB.count > 30) {
                                alert('Вы киноман');
                            } else {
                                alert('Произошла ошибка');
                            }
                        },
    showMyDB: function () {
                if (personalMovieDB.privat === false) {
                    console.log(personalMovieDB);
                }
            },
    writeYourGenres: function () {
                        for (let i = 1; i <= 3; i++) {
                            personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
                            while (personalMovieDB.genres[i-1] == null || personalMovieDB.genres[i-1] == '') {
                                personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
                            }
                        }
                        personalMovieDB.genres.forEach(function (item, i, arr) {
                            console.log(`Любимый жанр ${i + 1} - это ${item}`);
                        })
                    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    }
};

console.log(null || NaN);