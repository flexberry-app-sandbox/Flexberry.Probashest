import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КомнатыMixin
} from '../mixins/regenerated/models/i-i-s-probashest-комнаты';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КомнатыMixin, Validations, {
});

defineProjections(Model);

export default Model;
