<script lang="ts">
	import { page } from '$app/stores';
</script>

<aside class="main-side">
	<nav class="side-nav">
		<div class="side-nav-main">
			<section class="drop-section">
				<ul class="drop-list">
					<li class="drop-list-item">
						<a
							class="drop-button u-capitalize u-small u-bold"
							href="/"
							class:is-selected={$page.url.pathname === '/'}
							aria-current={$page.url.pathname === '/' ? 'page' : undefined}
						>
							<span> Home </span>
						</a>
					</li>
					<li class="drop-list-item">
						<a
							class="drop-button u-capitalize u-small u-bold"
							href="/getting-started"
							class:is-selected={$page.url.pathname === '/getting-started'}
							aria-current={$page.url.pathname === '/getting-started' ? 'page' : undefined}
						>
							<span> Getting Started </span>
						</a>
					</li>
					<li class="drop-list-item">
						<a
							class="drop-button u-capitalize u-small u-bold"
							href="/test"
							class:is-selected={$page.url.pathname === '/test'}
							aria-current={$page.url.pathname === '/test' ? 'page' : undefined}
						>
							<span> Test </span>
						</a>
					</li>
					<li class="drop-list-item">
						<ul class="collapsible">
							<li class="collapsible-item">
								<details class="collapsible-wrapper" data-title="Foundations" open>
									<summary class="collapsible-button u-small" style="padding-inline: 16px">
										<span class="text">Services</span>
										<div class="icon">
											<span class="icon-cheveron-down" aria-hidden="true" />
										</div>
									</summary>
									<div class="collapsible-content">
										<ul class="drop-list">
											<li class="drop-list-item">
												<a class="drop-button u-capitalize u-small" href="/">
													<span class="u-margin-inline-start-16"> account </span>
												</a>
											</li>
											<li class="drop-list-item">
												<a class="drop-button u-capitalize u-small" href="/">
													<span class="u-margin-inline-start-16"> databases </span>
												</a>
											</li>
											<li class="drop-list-item">
												<a class="drop-button u-capitalize u-small" href="/">
													<span class="u-margin-inline-start-16"> and more </span>
												</a>
											</li>
										</ul>
									</div>
								</details>
							</li>
						</ul>
					</li>
				</ul>
			</section>
		</div>
	</nav>
</aside>
