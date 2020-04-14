import * as yup from 'yup';

export const validateForm = async (
  schema: yup.ObjectSchema,
  data: object,
  // eslint-disable-next-line consistent-return
): Promise<any> => {
  try {
    await schema?.validate(data, {
      abortEarly: false,
    });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      const errors = error.inner.reduce(
        (previousError, currentError) => ({
          ...previousError,
          [currentError.path]: currentError.message,
        }),

        {},
      );

      return errors;
    }
  }
};
