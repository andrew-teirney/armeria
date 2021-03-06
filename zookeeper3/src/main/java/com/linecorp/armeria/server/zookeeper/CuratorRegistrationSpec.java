/*
 * Copyright 2020 LINE Corporation
 *
 * LINE Corporation licenses this file to you under the Apache License,
 * version 2.0 (the "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at:
 *
 *   https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */
package com.linecorp.armeria.server.zookeeper;

import org.apache.curator.x.discovery.ServiceInstance;

import com.google.common.base.MoreObjects;

import com.linecorp.armeria.internal.common.zookeeper.CuratorXNodeValueCodec;

final class CuratorRegistrationSpec implements ZooKeeperRegistrationSpec {

    private final ServiceInstance<?> serviceInstance;
    private final String path;

    CuratorRegistrationSpec(ServiceInstance<?> serviceInstance) {
        this.serviceInstance = serviceInstance;
        path = '/' + serviceInstance.getName() + '/' + serviceInstance.getId();
    }

    ServiceInstance<?> serviceInstance() {
        return serviceInstance;
    }

    @Override
    public String path() {
        return path;
    }

    @Override
    public boolean isSequential() {
        return false;
    }

    @Override
    public byte[] encodedInstance() {
        return CuratorXNodeValueCodec.INSTANCE.encode(serviceInstance);
    }

    @Override
    public String toString() {
        return MoreObjects.toStringHelper(this)
                          .add("serviceInstance", serviceInstance)
                          .add("path", path)
                          .add("isSequential", isSequential())
                          .toString();
    }
}
