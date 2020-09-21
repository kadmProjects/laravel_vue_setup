<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <div><h1>Login</h1></div>
                        <div class="form-group">
                            <label for="email">E-Mail Address</label>
                            <input
                                id="email"
                                type="email"
                                class="form-control"
                                name="email"
                                required
                                autocomplete="email"
                                autofocus
                            />
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                class="form-control"
                                name="password"
                                required
                                autocomplete="current-password"
                            />
                        </div>
                        <div class="form-group">
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    name="remember"
                                    id="remember"
                                />
                                <label class="form-check-label" for="remember">
                                    Remember Me
                                </label>
                            </div>
                        </div>
                        <div class="form-group mb-0">
                            <button
                                type="submit"
                                class="btn btn-primary btn-block"
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./login-component.js"></script>
<style src="./login-component.scss" scoped lang="scss"></style>
