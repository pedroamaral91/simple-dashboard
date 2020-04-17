import { Seq } from 'immutable';

export const normalize = collection => {
  return Seq.Indexed(collection)
    .toKeyedSeq()
    .mapEntries(([, element]: any) => [
      element.id ? String(element.id) : element.get('id'),
      element,
    ])
    .toMap();
};
