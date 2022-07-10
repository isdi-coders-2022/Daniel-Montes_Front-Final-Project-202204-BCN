export interface UISliceState {
  loading: boolean;
  finishedLoading: boolean;
  promptMessage: string;
  headerTitle: string;
  headerTitleLast: string;
  apiResponse: string;
  pages: number;
  currentPage: number;
  pagination: number;
}
