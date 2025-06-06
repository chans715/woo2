import { create } from 'zustand';
import { Template, TemplateFormData } from '@/types/template';

interface TemplateStore {
  templates: Template[];
  selectedTemplate: Template | null;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  fetchTemplates: () => Promise<void>;
  createTemplate: (data: TemplateFormData) => Promise<void>;
  updateTemplate: (id: string, data: Partial<TemplateFormData>) => Promise<void>;
  deleteTemplate: (id: string) => Promise<void>;
  selectTemplate: (template: Template | null) => void;
}

// 임시 데이터
const mockTemplates: Template[] = [
  {
    id: '1',
    name: '계약서 템플릿',
    description: '기본 계약서 양식',
    fileUrl: '/templates/contract.pdf',
    createdAt: new Date('2024-03-01'),
    updatedAt: new Date('2024-03-01'),
    createdBy: '관리자',
    status: 'active',
    fields: []
  },
  {
    id: '2',
    name: '동의서 템플릿',
    description: '개인정보 수집 동의서',
    fileUrl: '/templates/consent.pdf',
    createdAt: new Date('2024-03-02'),
    updatedAt: new Date('2024-03-02'),
    createdBy: '관리자',
    status: 'active',
    fields: []
  }
];

export const useTemplateStore = create<TemplateStore>((set, get) => ({
  templates: [],
  selectedTemplate: null,
  isLoading: false,
  error: null,

  fetchTemplates: async () => {
    set({ isLoading: true, error: null });
    try {
      // TODO: API 호출 구현
      // const response = await fetch('/api/templates');
      // const data = await response.json();
      // set({ templates: data, isLoading: false });
      
      // 임시로 mock 데이터 사용
      await new Promise(resolve => setTimeout(resolve, 500)); // 로딩 효과를 위한 지연
      set({ templates: mockTemplates, isLoading: false });
    } catch (error) {
      console.error('템플릿 목록 조회 실패:', error);
      set({ error: '템플릿 목록을 불러오는데 실패했습니다.', isLoading: false });
    }
  },

  createTemplate: async (data: TemplateFormData) => {
    set({ isLoading: true, error: null });
    try {
      // TODO: API 호출 구현
      // const response = await fetch('/api/templates', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });
      // const newTemplate = await response.json();
      
      // 임시로 mock 데이터 사용
      const newTemplate: Template = {
        id: Date.now().toString(),
        name: data.name,
        description: data.description,
        fileUrl: '/templates/new.pdf',
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: '관리자',
        status: 'active',
        fields: data.fields
      };
      
      set(state => ({
        templates: [...state.templates, newTemplate],
        isLoading: false,
      }));
    } catch (error) {
      console.error('템플릿 생성 실패:', error);
      set({ error: '템플릿 생성에 실패했습니다.', isLoading: false });
    }
  },

  updateTemplate: async (id: string, data: Partial<TemplateFormData>) => {
    set({ isLoading: true, error: null });
    try {
      // TODO: API 호출 구현
      // const response = await fetch(`/api/templates/${id}`, {
      //   method: 'PATCH',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });
      // const updatedTemplate = await response.json();
      
      // 임시로 mock 데이터 사용
      const updatedTemplate: Template = {
        id,
        name: data.name || '',
        description: data.description || '',
        fileUrl: '/templates/updated.pdf',
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: '관리자',
        status: 'active',
        fields: data.fields || []
      };
      
      set(state => ({
        templates: state.templates.map(t => 
          t.id === id ? updatedTemplate : t
        ),
        isLoading: false,
      }));
    } catch (error) {
      console.error('템플릿 수정 실패:', error);
      set({ error: '템플릿 수정에 실패했습니다.', isLoading: false });
    }
  },

  deleteTemplate: async (id: string) => {
    set({ isLoading: true, error: null });
    try {
      // TODO: API 호출 구현
      // await fetch(`/api/templates/${id}`, {
      //   method: 'DELETE',
      // });
      
      // 임시로 mock 데이터 사용
      await new Promise(resolve => setTimeout(resolve, 500)); // 로딩 효과를 위한 지연
      set(state => ({
        templates: state.templates.filter(t => t.id !== id),
        isLoading: false,
      }));
    } catch (error) {
      console.error('템플릿 삭제 실패:', error);
      set({ error: '템플릿 삭제에 실패했습니다.', isLoading: false });
    }
  },

  selectTemplate: (template: Template | null) => {
    set({ selectedTemplate: template });
  },
})); 