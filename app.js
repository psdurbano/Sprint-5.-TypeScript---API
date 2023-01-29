var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
var reportJokes = [];
var currentScore = 1;
function fetcher(url, headers) {
    var _a, _b, _c;
    if (url === void 0) { url = ""; }
    if (headers === void 0) { headers = {}; }
    return __awaiter(this, void 0, void 0, function () {
        function updateReportJokes(joke, score) {
            var jokeExists = false;
            // Recorrer el array reportJokes
            reportJokes.forEach(function (j) {
                // Si la broma ya existe en el array reportJokes, actualizar su puntuación
                if (j.joke === joke) {
                    j.score = score;
                    jokeExists = true;
                }
            });
            // Si la broma no existe en el array reportJokes, agregar una nueva entrada
            if (!jokeExists) {
                reportJokes.push({ joke: joke, score: score, date: new Date().toLocaleString() });
            }
            console.log(reportJokes);
        }
        var response, data, jokeContent, voteButtons;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, fetch(url, headers)];
                case 1:
                    response = _d.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _d.sent();
                    jokeContent = document.querySelector("#joke-content");
                    // Si no existe el elemento, crear un nuevo elemento "p" con el id "joke-content"
                    if (!jokeContent) {
                        jokeContent = document.createElement("p");
                        jokeContent.setAttribute("id", "joke-content");
                        document.body.appendChild(jokeContent);
                    }
                    // Asignar el valor de "data.joke" al contenido de texto del elemento seleccionado o creado
                    jokeContent.textContent = data.joke;
                    voteButtons = document.querySelector("#vote-buttons");
                    if (voteButtons) {
                        voteButtons.style.display = "block";
                    }
                    // Agregar eventos "click" a los botones de votación
                    (_a = document.querySelector("#vote-1")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
                        // Asignar el valor de la puntuación actual al valor 1
                        currentScore = 1;
                        // Actualizar la puntuación en el array reportJokes
                        updateReportJokes(data.joke, currentScore);
                    });
                    (_b = document.querySelector("#vote-2")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
                        // Asignar el valor de la puntuación actual al valor 2
                        currentScore = 2;
                        // Actualizar la puntuación en el array reportJokes
                        updateReportJokes(data.joke, currentScore);
                    });
                    (_c = document.querySelector("#vote-3")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
                        // Asignar el valor de la puntuación actual al valor 3
                        currentScore = 3;
                        // Actualizar la puntuación en el array reportJokes
                        updateReportJokes(data.joke, currentScore);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
// Agregar un evento "click" al elemento con la clase "next-joke" (si existe) que llama a la función fetcher
(_a = document.querySelector(".next-joke")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    fetcher("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json"
        }
    });
});
