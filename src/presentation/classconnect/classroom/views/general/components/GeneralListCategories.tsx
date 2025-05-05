import React from 'react';
import { ClassroomCategoryEntity } from '../../../../../../domain/entities/classroom-category.entity';
import { capitalizeString } from '../../../../../shared/helpers';

interface GeneralListCategoriesProps {
  categories: ClassroomCategoryEntity[];
}

export const GeneralListCategories: React.FC<GeneralListCategoriesProps> = ({
  categories,
}) => {
  return (
    <div className="general-categories">
      {categories.map(({ categoryName }) => (
        <span>{capitalizeString(categoryName)}</span>
      ))}
    </div>
  );
};
