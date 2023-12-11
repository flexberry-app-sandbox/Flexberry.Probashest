import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ДокРегистКартыMixin
} from '../mixins/regenerated/models/i-i-s-probashest-док-регист-карты';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ДокРегистКартыMixin, Validations, {
});

defineProjections(Model);

export default Model;
