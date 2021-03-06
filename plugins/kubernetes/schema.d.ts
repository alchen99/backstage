/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  ClusterLocatorMethod,
  CustomResource,
} from '@backstage/plugin-kubernetes-backend';

export interface Config {
  kubernetes?: {
    /**
     * @visibility frontend
     */
    serviceLocatorMethod: {
      /**
       * @visibility frontend
       */
      type: 'multiTenant';
    };
    /**
     * @visibility frontend
     */
    clusterLocatorMethods: ClusterLocatorMethod[];
    /**
     * @visibility frontend
     */
    customResources?: CustomResource[];
  };
}
