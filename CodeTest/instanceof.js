function instanceOf(left, right) {
    let leftProto = left.__proto__;
    let rightProto = right.prototype;
    while (true) {
        if (leftProto === null) {
            return false
        }
        if (leftProto === rightProto) {
            return true
        }
        leftProto = leftProto.__proto__
    }
}