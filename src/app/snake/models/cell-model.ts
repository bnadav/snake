export class CellModel {
    _visited = false;
    _has_bomb = false;
    _blast = false;
    _current = false;

    get current() {
        return this._current;
    }

    set current(bool) {
        this._current = bool;
    }

    get visited() {
        return this._visited;
    }

    set visited(bool) {
        this._visited = bool
    }

    get has_bomb() {
        return this._has_bomb;
    }

    set has_bomb(bool) {
        this._has_bomb = bool;
    }

    get blast() {
        return this._blast;
    }

    set blast(bool) {
        this._blast = bool;
    }
}