// Copyright 2023 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Unit tests for ContributorAdminDashboardFilter model.
 */

import { ContributorAdminDashboardFilter } from './contributor-admin-dashboard-filter.model';

describe('Contributor Admin Dashboard Filter Model', () => {
  let filter: ContributorAdminDashboardFilter;

  beforeEach(() => {
    filter = ContributorAdminDashboardFilter.createDefault();
  });

  it('should create a new dashboard filter object', () => {
    expect(filter.languageCode).toEqual('en');
    expect(filter.topicIds).toEqual([]);
  });
});
