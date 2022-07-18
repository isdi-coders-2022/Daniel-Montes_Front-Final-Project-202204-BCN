export interface UISliceState {
  loading: boolean;
  finishedLoading: boolean;
  modalMessage: string;
  modalType: string;
  headerTitle: string;
  headerLastTitle: string;
  apiResponse: string;
  pages: number;
  currentPage: number;
  pagination: number;
}
