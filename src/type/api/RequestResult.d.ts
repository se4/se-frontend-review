interface RequestResult<Data, Ability, Meta> {
  data?: Data;
  ability?: Ability;
  meta?: Meta;
  _header: {
    Authorization?: string;
  };
}
