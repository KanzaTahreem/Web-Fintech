export const PENDING = '승인대기';
export const DENIED = '승인거부';
export const APPROVED = '승인완료';
export const DIRECT_INPUT = '직접 입력';
export const MAX_SIZE = 100 * 1024 * 1024;
export const MAX_COUNT = 10;
export const TABS = [
  '기본정보 관리',
  '투자유형 관리',
  '입출금내역 조회',
  '영업내역 조회',
  '투자내역 조회',
  '채권내역 조회',
  'SMS 관리',
  '상담내역 관리',
  '1:1문의내역 조회',
];

export const FILTER_OPTIONS = [
  { buttonText: '승인여부 전체', filterItems: ['승인여부 전체', PENDING, APPROVED, DENIED], selectedItem: null },
  { buttonText: '신청일시순', filterItems: ['신청일시순', '승인일시순'], selectedItem: null },
  { buttonText: '50개씩 보기', filterItems: ['25개씩 보기', '100개씩 보기'], selectedItem: null },
];

export const INVESTMENT_TYPE = ['일반개인', '소득적격', '개인전문', '법인', '여신금융', 'P2P온투'];
