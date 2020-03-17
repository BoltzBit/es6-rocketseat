"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var List = /*#__PURE__*/function () {
  function List() {
    _classCallCheck(this, List);

    this.todos = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.todos.push(data);
      console.log(this.todos);
    }
  }]);

  return List;
}();

var TodoList = /*#__PURE__*/function (_List) {
  _inherits(TodoList, _List);

  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    //chama a classe pai
    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoList).call(this));
    _this.usuario = 'Diego';
    return _this;
  }

  _createClass(TodoList, [{
    key: "MostraUsuario",
    value: function MostraUsuario() {
      console.log(this.usuario);
    }
  }]);

  return TodoList;
}(List);

var Matematica = /*#__PURE__*/function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    //metodos static não exergam this
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return Matematica;
}();

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
  MinhaLista.add('Novo Todo');
};

MinhaLista.MostraUsuario();
console.log(Matematica.soma(1, 3));
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);
var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum);
var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter);
var find = arr.find(function (item) {
  return item === 4;
});
console.log(find);

var teste = function teste() {
  return 'teste';
};

console.log(teste()); //quando vc precisa retornar um objeto ficaria desta forma

var teste2 = function teste2() {
  return {
    nome: 'Diego'
  };
};

console.log(teste2());

function somaA() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  //possibilidade de valores padrões passados como paramtros
  return a + b;
}

console.log(somaA(1));
var usuario = {
  nome: 'Mateus',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'RS'
  }
};
console.log(usuario); //forma arcaica
//const nome = usuario.nome;
//const idade = usuario.idade;
//const cidade = usuario.endereco.cidade;

var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome, idade, cidade); //uma forma de usar desestruturação

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(usuario); //rest, pegar o resto das propriedades

var user = {
  name: 'Diego',
  idade: 25,
  empresa: 'Rockeseat'
};

var name = user.name,
    resto = _objectWithoutProperties(user, ["name"]);

console.log(name);
console.log(resto); //com array

var arr2 = [1, 2, 3, 4, 5, 6];
var a = arr2[0],
    b = arr2[1],
    c = arr2.slice(2);
console.log(a);
console.log(b);
console.log(c); //podemos usar em funcao

function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(soma(1, 2, 3, 4));

function sobra(a, b) {
  for (var _len2 = arguments.length, param = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    param[_key2 - 2] = arguments[_key2];
  }

  console.log(a, b, param);
}

sobra(1, 2, 3, 4, 4, 6, 7); //usando o spread operator

var arrMeu = [1, 2, 3];
var arrSeu = [4, 5, 6];
var arrNosso = [].concat(arrMeu, arrSeu);
console.log(arrNosso); //outro uso para o spread

var usuario1 = {
  name: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
};

var usuario2 = _objectSpread({}, usuario1, {
  name: 'Mateus'
});

console.log(usuario2);
var name1 = 'Mateus';
var idade1 = 23;
console.log("Meu nome \xE9 ".concat(name1, " e tenho ").concat(idade1, " anos"));
var n = 'Mateus';
var i = 23; //short syntax

var user2 = {
  n: n,
  i: i,
  empresa: 'Rocketseat'
};
console.log(user2);
