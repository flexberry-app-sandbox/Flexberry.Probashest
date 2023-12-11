import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ДокРегВходаMixin
} from '../mixins/regenerated/models/i-i-s-probashest-док-рег-входа';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ДокРегВходаMixin, Validations, {
});

defineProjections(Model);

export default Model;
