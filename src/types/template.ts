export interface Template {
  id: string;
  name: string;
  description: string;
  fileUrl: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  status: 'active' | 'inactive' | 'archived';
  fields: TemplateField[];
}

export interface TemplateField {
  id: string;
  name: string;
  type: 'text' | 'signature' | 'date' | 'checkbox';
  required: boolean;
  position: {
    x: number;
    y: number;
    page: number;
  };
}

export interface TemplateFormData {
  name: string;
  description: string;
  file: File | null;
  fields: Omit<TemplateField, 'id'>[];
} 