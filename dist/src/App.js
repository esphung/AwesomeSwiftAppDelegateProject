"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const react_1 = __importDefault(require("react"));
function isHermes() {
    // @ts-ignore
    return !!(global === null || global === void 0 ? void 0 : global.HermesInternal);
}
function isFabric() {
    // @ts-ignore
    return !!(global === null || global === void 0 ? void 0 : global.nativeFabricUIManager);
}
function App() {
    return (<react_native_1.View style={styles.container}>
      <react_native_1.View style={styles.centeredView}>
        <react_native_1.Text>Open up App.tsx to start working on your app!</react_native_1.Text>
        <react_native_1.Text>{`Hermes is ${isHermes() ? 'enabled' : 'disabled'}`}</react_native_1.Text>
        <react_native_1.Text>{`Fabric is ${isFabric() ? 'enabled' : 'disabled'}`}</react_native_1.Text>
        <react_native_1.Text>React {react_1.default.version}</react_native_1.Text>
      </react_native_1.View>
    </react_native_1.View>);
}
exports.default = App;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
