import * as Linq from './LinqMethods';
var extensionMethods;
(function (extensionMethods) {
    const iterableIterator = (function* () { })().constructor;
    class extensionApplicator {
        constructor(forceApply) {
            this._forceApply = forceApply;
        }
        notifyConflict(methodName) {
            if (this._forceApply) {
                console.warn(`Extension Method conflict detected when applying the '${methodName} method`);
            }
            else {
                throw new Error(`Extension Method conflict detected when applying the '${methodName} method`);
            }
        }
        detectConflict(prtototype, methodName) {
            if (prtototype[methodName]) {
                this.notifyConflict(methodName);
            }
        }
        tryApplyMethod(prtototype, methodName, method) {
            this.detectConflict(prtototype, methodName);
            prtototype[methodName] = method;
        }
    }
    const extensions = [];
    extensions.push({ methodName: 'select', method: function (selector) {
            return Linq.select(this, selector);
        } });
})(extensionMethods || (extensionMethods = {}));
