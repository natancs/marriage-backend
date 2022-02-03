"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveItemController = void 0;
const RemoveItemService_1 = require("../../services/admin/RemoveItemService");
class RemoveItemController {
    execute(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const removeService = new RemoveItemService_1.RemoveItemService();
            try {
                yield removeService.execute(parseInt(id));
                return response.send();
            }
            catch (err) {
                return response.status(400).json({ error: "Item not fould" });
            }
        });
    }
}
exports.RemoveItemController = RemoveItemController;
;
