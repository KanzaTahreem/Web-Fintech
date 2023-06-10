const localStorageApplicationsData  =  JSON.parse(localStorage.getItem('APPLICATION_DATA') || '[]');
const mockData = [
  {
    "previousType": "소득적격",
    "applicationType": "개인전문",
    "number": "abc1",
    "name": "",
    "docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
    "applicationDate": "2023-06-05 08:46:43",
    "approvalStatus": "승인완료",
    "reason": "",
    "serial": 1,
    "checked": false,
    "admin": "김관리자",
    "approvalDate": "2023-06-05 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-06-04 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 2,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-06-04 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-06-03 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 3,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-06-03 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-06-02 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 4,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-06-02 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-06-01 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 5,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-06-01 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-05-31 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 6,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-05-31 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-05-30 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 7,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-05-30 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-05-29 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 8,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-05-29 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-05-28 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 9,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-05-28 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-05-27 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 10,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-05-27 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-05-26 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 11,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-05-26 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-05-25 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 12,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-05-25 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-05-24 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 13,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-05-24 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-05-23 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 14,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-05-23 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-05-22 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 15,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-05-22 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-05-21 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 16,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-05-21 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-05-20 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 17,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-05-20 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-05-19 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 18,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-05-19 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-05-18 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 19,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-05-18 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-05-17 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 20,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-05-17 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-05-16 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 21,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-05-16 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-05-15 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 22,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-05-15 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-05-14 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 23,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-05-14 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-05-13 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 24,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-05-13 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-05-12 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 25,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-05-12 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-05-11 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 26,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-05-11 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-05-10 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 27,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-05-10 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-05-09 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 28,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-05-09 08:46:43"
	},
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-05-08 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 29,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-05-08 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-05-07 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 30,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-05-07 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-05-06 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 31,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-05-06 08:46:43"
  },
  {
    "previousType": "소득적격",
    "applicationType": "개인전문",
    "number": "abc1",
    "name": "",
    "docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
    ],
    "applicationDate": "2023-05-05 08:46:43",
    "approvalStatus": "승인완료",
    "reason": "",
    "serial": 32,
    "checked": false,
    "admin": "김관리자",
    "approvalDate": "2023-05-05 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-05-04 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 33,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-05-04 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-05-03 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 34,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-05-03 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-05-02 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 35,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-05-02 08:46:43"
  },
  {
      "previousType": "소득적격",
      "applicationType": "개인전문",
      "number": "abc1",
      "name": "",
      "docs": [
          {
              "url": "https://shorturl.at/dlCT2",
              "ext": "png"
          }
      ],
      "applicationDate": "2023-05-01 08:46:43",
      "approvalStatus": "승인완료",
      "reason": "",
      "serial": 36,
      "checked": false,
      "admin": "김관리자",
      "approvalDate": "2023-05-01 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-04-30 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 37,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-04-30 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-04-29 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 38,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-04-29 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-04-28 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 39,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-04-28 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-04-27 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 40,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-04-27 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-04-26 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 41,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-04-26 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-04-25 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 42,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-04-25 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-04-24 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 43,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-04-24 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-04-23 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 44,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-04-23 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-04-22 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 45,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-04-22 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-04-21 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 46,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-04-21 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-04-20 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 47,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-04-20 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-04-19 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 48,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-04-19 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-04-18 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 49,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-04-18 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-04-17 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 50,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-04-17 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-04-16 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 51,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-04-16 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-04-15 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 52,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-04-15 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-04-14 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 53,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-04-14 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-04-13 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 54,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-04-13 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-04-12 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 55,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-04-12 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-04-11 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 56,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-04-11 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-04-10 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 57,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-04-10 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-04-09 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 58,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-04-09 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-04-08 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 59,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-04-08 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-04-07 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 60,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-04-07 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-04-06 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 61,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-04-06 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-04-05 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 62,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-04-05 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-04-04 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 63,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-04-04 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-04-03 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 64,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-04-03 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-04-02 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 65,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-04-02 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-04-01 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 66,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-04-01 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-03-31 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 67,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-03-31 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-03-30 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 68,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-03-30 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-03-29 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 69,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-03-29 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-03-28 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 70,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-03-28 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-03-27 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 71,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-03-27 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-03-26 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 72,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-03-26 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-03-25 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 73,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-03-25 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-03-24 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 74,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-03-24 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-03-23 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 75,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-03-23 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-03-22 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 76,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-03-22 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-03-21 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 77,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-03-21 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-03-20 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 78,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-03-20 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-03-19 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 79,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-03-19 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-03-18 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 80,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-03-18 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-03-17 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 81,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-03-17 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-03-16 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 82,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-03-16 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-03-15 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 83,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-03-15 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-03-14 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 84,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-03-14 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-03-13 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 85,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-03-13 08:46:43"
  },
  {
	"previousType": "소득적격",
	"applicationType": "개인전문",
	"number": "abc1",
	"name": "",
	"docs": [
		{
			"url": "https://shorturl.at/dlCT2",
			"ext": "png"
		}
	],
	"applicationDate": "2023-03-12 08:46:43",
	"approvalStatus": "승인완료",
	"reason": "",
	"serial": 86,
	"checked": false,
	"admin": "김관리자",
	"approvalDate": "2023-03-12 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-03-11 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 87,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-03-11 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-03-10 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 88,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-03-10 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-03-09 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 89,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-03-09 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-03-08 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 90,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-03-08 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-03-07 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 91,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-03-07 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-03-06 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 92,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-03-06 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-03-05 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 93,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-03-05 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-03-04 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 94,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-03-04 08:46:43"
  },
	{
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-03-03 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 95,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-03-03 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-03-02 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 96,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-03-02 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-03-01 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 97,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-03-01 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-02-28 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 98,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-02-28 08:46:43"
  },
  {
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-02-27 08:46:43",
		"approvalStatus": "승인완료",
		"reason": "",
		"serial": 99,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-02-27 08:46:43"
  },
	{
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-06-05 08:56:38",
		"approvalStatus": "승인대기",
		"reason": "",
		"serial": 100,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-06-05 08:56:38"
	},
	{
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-06-04 08:56:38",
		"approvalStatus": "승인대기",
		"reason": "",
		"serial": 101,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-06-04 08:56:38"
	},
	{
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-06-03 08:56:38",
		"approvalStatus": "승인대기",
		"reason": "",
		"serial": 102,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-06-03 08:56:38"
	},
	{
		"previousType": "소득적격",
		"applicationType": "개인전문",
		"number": "abc1",
		"name": "",
		"docs": [
			{
				"url": "https://shorturl.at/dlCT2",
				"ext": "png"
			}
		],
		"applicationDate": "2023-06-02 08:56:38",
		"approvalStatus": "승인대기",
		"reason": "",
		"serial": 103,
		"checked": false,
		"admin": "김관리자",
		"approvalDate": "2023-06-02 08:56:38"
	}
];

// Create a lookup table based on serial numbers
const lookupTable = {};

// Merge the arrays and deduplicate based on serial number
const ApplicationsData = localStorageApplicationsData.concat(mockData).filter(obj => {
  if (!lookupTable[obj.serial]) {
    lookupTable[obj.serial] = true;
    return true;
  }
  return false;
});

export default ApplicationsData;
