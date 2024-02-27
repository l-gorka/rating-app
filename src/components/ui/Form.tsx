

export const Form = ({ isDisabled, formData, handleChange}) => {

  return (
    <div className="flex flex-col gap-4">
      {formData.map((item, index) => {
        return (
          <div key={item.key}>
            <item.component
              {...item}
              size="lg"
              variant="bordered"
              radius="sm"
              isEditable={false}
              config={item.config}
              isDisabled={isDisabled}
              isRequired={item.isRequired}
              isInvalid={!!item.errorMessage}
              onConfigChange={() => {}}
              onChange={(updatedField) => handleChange(item.key, updatedField)}
            />
          </div>
        );
      })}
    </div>
  );
};
